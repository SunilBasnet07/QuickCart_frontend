'use client'
import { PRODUCT_ROUTE } from '@/route/route'
import Link from 'next/link'
import React from 'react'
import { FaSearch, FaBolt, FaShieldAlt, FaStar, FaTruck } from 'react-icons/fa'


const HeroSection = () => {
	const quickCategories = [
		'Electronics',
		'Fashion',
		'Home & Living',
		'Beauty',
		'Sports',
		'Gadgets'
	]

	return (
		<section className="relative overflow-hidden">
			{/* Background blobs */}
			<div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl" />
			<div className="pointer-events-none absolute -bottom-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-pink-500/20 to-amber-500/20 blur-3xl" />

			<div className="max-w-7xl mx-auto px-6 py-14 md:py-20">
				<div className="grid lg:grid-cols-2 gap-10 items-center">
					{/* Left: Headline + Search + CTAs */}
					<div>
						<span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-Nunito-SemiBold text-blue-600 ring-1 ring-blue-200">New season just dropped</span>
						<h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl leading-tight font-Nunito-ExtraBold text-gray-900">
							Shop smarter with
							<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> QuickCart</span>
						</h1>
						<p className="mt-4 text-lg md:text-xl text-gray-600 font-Nunito max-w-xl">
							Discover trending products, exclusive deals, and fast delivery. Everything you love in one place.
						</p>

						{/* Search */}
						{/* <div className="mt-8 rounded-2xl bg-white shadow-lg ring-1 ring-gray-200 p-2 flex items-center gap-2">
							<FaSearch className="text-gray-400 ml-2" />
							<input
								type="text"
								placeholder="Search for products, brands and more"
								className="flex-1 px-3 py-3 font-Nunito outline-none placeholder:text-gray-400"
							/>
							<button className="px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-Nunito-SemiBold hover:from-blue-700 hover:to-purple-700 transition-transform duration-200 hover:scale-[1.02]">
								Search
							</button>
						</div> */}

						{/* Quick categories */}
						<div className="mt-5 flex flex-wrap gap-2">
							{quickCategories.map((cat) => (
								<button key={cat} className="px-3 py-1.5 rounded-full text-sm font-Nunito-SemiBold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors">
									{cat}
								</button>
							))}
						</div>

						{/* CTAs */}
						<div className="mt-8 flex flex-col sm:flex-row gap-3">
							<Link href={PRODUCT_ROUTE} className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-Nunito-SemiBold hover:from-blue-700 hover:to-purple-700 transition-transform duration-200 hover:scale-[1.02]">
								Start Shopping
							</Link>
							<button className="px-6 py-3 rounded-xl border-2 border-gray-300 text-gray-800 font-Nunito-SemiBold hover:border-gray-400">
								View Deals
							</button>
						</div>

						{/* Trust stats */}
						<div className="mt-10 grid grid-cols-3 gap-4">
							<div className="flex items-center gap-2">
								<span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-600"><FaTruck /></span>
								<div>
									<p className="text-sm font-Nunito-SemiBold text-gray-900">Free Shipping</p>
									<p className="text-xs text-gray-500 font-Nunito">On orders over $50</p>
								</div>
							</div>
							<div className="flex items-center gap-2">
								<span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-600"><FaShieldAlt /></span>
								<div>
									<p className="text-sm font-Nunito-SemiBold text-gray-900">Secure Checkout</p>
									<p className="text-xs text-gray-500 font-Nunito">100% protected</p>
								</div>
							</div>
							<div className="flex items-center gap-2">
								<span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-amber-50 text-amber-600"><FaStar /></span>
								<div>
									<p className="text-sm font-Nunito-SemiBold text-gray-900">4.9/5 Rating</p>
									<p className="text-xs text-gray-500 font-Nunito">Trusted by shoppers</p>
								</div>
							</div>
						</div>
					</div>

					{/* Right: Product collage */}
					<div className="relative">
						<div className="relative mx-auto w-full max-w-xl">
							{/* Decorative blob */}
							<div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-blue-500/15 via-purple-500/15 to-pink-500/15 blur-2xl" />

							<div className="relative overflow-hidden rounded-[2rem] ring-1 ring-gray-200 shadow-2xl">
								<img
									src="https://images.unsplash.com/photo-1544117519-31a4b719223d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
									alt="Featured product"
									className="h-[420px] w-full object-cover"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
								{/* Floating badge */}
								<div className="absolute top-4 left-4">
									<span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-sm font-Nunito-SemiBold text-gray-900 shadow">
										<FaBolt className="text-yellow-500" /> Best Choice
									</span>
								</div>
								<div className="absolute bottom-4 right-4">
									<span className="inline-flex rounded-full bg-gradient-to-r from-rose-500 to-pink-500 px-3 py-1 text-sm font-Nunito-SemiBold text-white shadow">
										Save 40%
									</span>
								</div>
							</div>

							{/* Thumbnails */}
							<div className="mt-4 flex justify-center gap-3">
								{[
									'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=300&q=60',
									'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=300&q=60',
									'https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
								].map((src) => (
									<img
										key={src}
										src={src}
										alt="thumb"
										className="h-16 w-16 rounded-xl object-cover ring-1 ring-gray-200 shadow"
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HeroSection