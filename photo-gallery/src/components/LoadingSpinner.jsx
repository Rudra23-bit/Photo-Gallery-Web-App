
export default function LoadingSpinner() {
return (
<div className="flex flex-col items-center justify-center py-24 gap-5">
{/* Spinner ring */}
<div className="relative w-14 h-14">
<div className="absolute inset-0 rounded-full border-4 border-peach-border" />
<div className="absolute inset-0 rounded-full border-4 border-transparent
border-t-[#f9516c] animate-spin-slow" />
</div>
<p className="text-peach-muted text-sm font-medium tracking-wide">
Loading photos…
</p>
</div>
)
}