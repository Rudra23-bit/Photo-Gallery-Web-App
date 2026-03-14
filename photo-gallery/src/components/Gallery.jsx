import { useReducer, useCallback, useMemo } from 'react'
import { useFetchPhotos } from '../hooks/useFetchPhotos'
import { favouritesReducer, initFavourites, ACTIONS }
from '../reducers/favouritesReducer'
import PhotoCard from './PhotoCard'
import LoadingSpinner from './LoadingSpinner'
import ErrorMessage from './ErrorMessage'

export default function Gallery({ searchQuery }) {

const { photos, loading, error } = useFetchPhotos()

const [favourites, dispatch] = useReducer(
favouritesReducer,
undefined,
initFavourites
)

const handleToggleFavourite = useCallback((id) => {
dispatch({ type: ACTIONS.TOGGLE, payload: id })
}, [])

const filteredPhotos = useMemo(() => {
const q = searchQuery.trim().toLowerCase()
if (!q) return photos
return photos.filter((p) =>
p.author.toLowerCase().includes(q)
)
}, [photos, searchQuery])
if (loading) return <LoadingSpinner />
if (error) return <ErrorMessage message={error} />
return (
<div>
{/* No-results state */}
{filteredPhotos.length === 0 && (
<div className="flex flex-col items-center justify-center
py-20 gap-3 text-center">
<span className="text-5xl">⚠️</span>
<p className="text-stone-500 text-sm">
No photos available for this name{' '}
<strong className="text-stone-700">"{searchQuery}"</strong>
</p>
</div>
)}
{/* Req 3: responsive grid — 1 / 2 / 4 columns */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
{filteredPhotos.map((photo, index) => (
<div key={photo.id}
style={{ animationDelay: `${Math.min(index * 40, 600)}ms` }}>
<PhotoCard
photo={photo}
isFavourited={favourites.has(photo.id)}
onToggleFavourite={handleToggleFavourite}
/>
</div>
))}
</div>
</div>
)
}