export default function ErrorMessage({ message }) 

{
return (
<div className="flex flex-col items-center justify-center py-24
gap-3 text-center px-4">
<div className="text-5xl">⚠️</div>
<h2 className="text-stone-800 font-display text-xl font-semibold">
Due to some error we couldn't load photos
</h2>
<p className="text-stone-500 text-sm max-w-xs">
{message || 'An unexpected error occurred. Please try again later.'}
</p>
</div>
)
}