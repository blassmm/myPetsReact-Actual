import { useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import { useCallback, useEffect, useMemo, useRef } from 'react';

function ScrollVideo() {
	const ref = useRef(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['center end', 'start start'],
	});

	const images = useMemo(() => {
		const loadedImages = [];

		for (let i = 1; i <= 86; i++) {
			const img = new Image();
			img.src = `/resources/videoImages/${i}.webp`;
			loadedImages.push(img);
		}

		return loadedImages;
	}, []);

	const render = useCallback(
		(index) => {
			if (images[index - 1]) {
				ref.current?.getContext('2d')?.drawImage(images[index - 1], 0, 0);
			}
		},
		[images]
	);

	const currentIndex = useTransform(scrollYProgress, [0, 1], [1, 86]);

	useMotionValueEvent(currentIndex, 'change', (latest) => {
		render(Number(latest.toFixed()));
	});

	useEffect(() => {
		render(1);
	}, [render]);

	return (
		<div
			style={{
				height: '6000px',
				backgroundColor: 'black',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<div style={{ height: '3000px' }} />
			<canvas width={1000} height={1000} ref={ref} />
		</div>
	);
}

export default ScrollVideo;