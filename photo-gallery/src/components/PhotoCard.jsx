
export default function PhotoCard({ photo, isFavourited, onToggleFavourite }) {
const imgSrc = `https://picsum.photos/id/${photo.id}/400/300`
return (
<article className="bg-white rounded-2xl overflow-hidden card-shadow
hover:card-shadow-hover transition-all duration-300 ease-out
hover:-translate-y-1 animate-fade-in">
{/* Photo */}
<div className="relative overflow-hidden aspect-[4/3] bg-peach-light">
<img
src={imgSrc}
alt={`Photo by ${photo.author}`}
loading="lazy"
className="w-full h-full object-cover transition-transform
duration-500 ease-out hover:scale-105"
/>
</div>
{/* Card footer */}
<div className="flex items-center justify-between px-4 py-3">
<div>
<p className="text-peach-dark font-medium text-sm leading-tight
truncate max-w-[160px]">
{photo.author}
</p>
<p className="text-peach-muted text-xs mt-0.5">Picsum Photos API</p>
</div>
{/* Heart button — Requirement 5 */}
<button
onClick={() => onToggleFavourite(photo.id)}
aria-label={isFavourited
? 'Remove from favourites' : 'Add to favourites'}
className={`w-9 h-9 flex items-center justify-center rounded-xl
transition-all duration-200 ease-out active:scale-90
${isFavourited
? 'bg-pink-100 text-rose-500 hover:bg-rose-200'
: 'bg-peach-search text-[#f9a8c0] hover:bg-pink-100 hover:text-[#f9516c]'
}`}
>
{isFavourited ? (
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
fill="currentColor" className="w-5 h-5 animate-scale-in">
<path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0
01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25
12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112
5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0
3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17
15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752
.752 0 01-.704 0l-.003-.001z" />
</svg>
) : (
<svg xmlns="http://www.w3.org/2000/svg" fill="none"
viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor"
className="w-5 h-5">
<path strokeLinecap="round" strokeLinejoin="round"
d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597
1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1
3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg>
)}
</button>
</div>
</article>
)
}