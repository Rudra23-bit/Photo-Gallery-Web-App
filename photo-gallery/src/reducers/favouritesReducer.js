
export const ACTIONS = {
TOGGLE: 'TOGGLE',
}

export function initFavourites() {
try {
const stored = localStorage.getItem('photo-gallery-favourites')
if (stored) {
const parsed = JSON.parse(stored)
if (Array.isArray(parsed)) return new Set(parsed)
}
} catch {
// localStorage unavailable or corrupted — start fresh

}
return new Set()
}

export function favouritesReducer(state, action) {
switch (action.type) {
case ACTIONS.TOGGLE: {
const next = new Set(state)
if (next.has(action.payload)) {
next.delete(action.payload)
} else {
next.add(action.payload)
}

try {
localStorage.setItem(
'photo-gallery-favourites',
JSON.stringify([...next])
)
} catch { /* ignore */ }
return next
}
default:
return state
}
}