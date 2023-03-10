import Head from 'next/head'
import Link from 'next/link'
import { Tab } from '@headlessui/react'
import Masonry from 'react-masonry-css'
import classNames from 'classnames'
import Image from 'next/image'
import bgImage from '../public/wal.jpg'

import type { LightGallery } from 'lightgallery/lightgallery'
import LightGalleryComponent from 'lightgallery/react'

// import styles
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'

import amg1 from '../public/amg/amg.five.jpg'
import amg2 from '../public/amg/amg.one.jpg'
import amg3 from '../public/amg/amg.six.jpg'
import amg4 from '../public/amg/amg.two.jpg'

import bmw1 from '../public/bmw/bmw.one.jpg'
import bmw2 from '../public/bmw/bmw.five.jpg'
import bmw3 from '../public/bmw/bmw.three.jpg'
import bmw4 from '../public/bmw/bmw.foo.jpg'

import por1 from '../public/porshe/por.1.jpg'
import por2 from '../public/porshe/por.2.jpg'
import por3 from '../public/porshe/por.3.jpg'
import por4 from '../public/porshe/por.4.jpg'

import { useRef } from 'react'

const tabs = [
	{
		key: 'amg',
		display: 'Mercedes-Benz',
	},
	{
		key: 'm',
		display: 'Bmw',
	},
	{
		key: 'porshe',
		display: 'Porsche',
	},
]

const images1 = [amg1, amg2, amg3, amg4]
const images2 = [bmw1, bmw2, bmw3, bmw4]
const images3 = [por1, por2, por3, por4]

export default function Home() {
	const lightboxRef = useRef<LightGallery | null>(null)

	return (
		<div className='h-full  overflow-auto'>
			<Head>
				<title>Create Next App</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Image
				className='fixed left-0 top-0 z-0'
				src={bgImage}
				alt='placeholder-img'
				placeholder='blur'
			/>

			<div className='fixed left-0 top-0 w-full h-ful z-10 from-stone-900 bg-gradient-to'></div>

			<header className='fixed bg-black top-0 flex w-full z-30  justify-between items-center h-[90px] px-10'>
				<span className='uppercase text-lg font-medium'>Collections Cars</span>
				<Link
					href='#'
					className='rounded-xl bg-white text-stone-700 px-3 py-2 hover:bg-opacity-90'
				>
					Get in touch
				</Link>
			</header>

			<main className='relative pt-[110px] z-20'>
				<div className='flex flex-col items-center h-full'>
					<Tab.Group>
						<Tab.List className='flex items-center gap-12'>
							{tabs.map(tab => (
								<Tab key={tab.key} className='p-2'>
									{({ selected }) => (
										<span
											className={classNames(
												'uppercase text-lg',
												selected ? 'text-stone-400' : 'text-white'
											)}
										>
											{tab.display}
										</span>
									)}
								</Tab>
							))}
						</Tab.List>
						<Tab.Panels className='  h-full  max-w-[900px] w-full p-2 sm:p-4 my-6'>
							<Tab.Panel className='overflow-auto'>
								<Masonry
									breakpointCols={2}
									className='flex gap-4'
									columnClassName=''
								>
									{images1.map((image, idx) => (
										<Image
											key={image.src}
											src={image}
											alt='placeholder'
											className='my-4 hover:opacity-70 cursor-pointer'
											placeholder='blur'
											onClick={() => {
												lightboxRef.current?.openGallery(idx)
											}}
										/>
									))}
								</Masonry>

								<LightGalleryComponent
									onInit={ref => {
										if (ref) {
											lightboxRef.current = ref.instance
										}
									}}
									speed={500}
									plugins={[lgThumbnail, lgZoom]}
									dynamic
									dynamicEl={images1.map(image => ({
										src: image.src,
										thumb: image.src,
									}))}
								/>
							</Tab.Panel>
							<Tab.Panel>
								<Masonry
									breakpointCols={2}
									className='flex gap-4'
									columnClassName=''
								>
									{images2.map((image, idx) => (
										<Image
											key={image.src}
											src={image}
											alt='placeholder'
											className='my-4 hover:opacity-70 cursor-pointer'
											placeholder='blur'
											onClick={() => {
												lightboxRef.current?.openGallery(idx)
											}}
										/>
									))}
								</Masonry>

								<LightGalleryComponent
									onInit={ref => {
										if (ref) {
											lightboxRef.current = ref.instance
										}
									}}
									speed={500}
									plugins={[lgThumbnail, lgZoom]}
									dynamic
									dynamicEl={images2.map(image => ({
										src: image.src,
										thumb: image.src,
									}))}
								/>
							</Tab.Panel>
							<Tab.Panel>
								<Masonry
									breakpointCols={2}
									className='flex gap-4'
									columnClassName=''
								>
									{images3.map((image, idx) => (
										<Image
											key={image.src}
											src={image}
											alt='placeholder'
											className='my-4 hover:opacity-70 cursor-pointer'
											placeholder='blur'
											onClick={() => {
												lightboxRef.current?.openGallery(idx)
											}}
										/>
									))}
								</Masonry>

								<LightGalleryComponent
									onInit={ref => {
										if (ref) {
											lightboxRef.current = ref.instance
										}
									}}
									speed={500}
									plugins={[lgThumbnail, lgZoom]}
									dynamic
									dynamicEl={images3.map(image => ({
										src: image.src,
										thumb: image.src,
									}))}
								/>
							</Tab.Panel>
						</Tab.Panels>
					</Tab.Group>
				</div>
			</main>

			<footer className='relative h-[60px] flex justify-center items-center uppercase text-lg z-20'>
				Placeholder for footer
			</footer>
		</div>
	)
}
