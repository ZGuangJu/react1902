import { useEffect } from 'react';
export default function useTilte(title) {
  useEffect(() => {
		document.title  = title
	}, []);
}
