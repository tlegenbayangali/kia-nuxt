<template>
	<footer class="footer bg-dark text-white w-full py-20" id="footer">
		<div class="container">
			<div>
				<div class="footer-logo flex items-center">
					<svg class="left-icon w-[70px] h-[35px] fill-white block">
						<use
							xlink:href="/images/svg/sprite.svg#kia-logo-new"
						></use>
					</svg>
					<span
						class="w-[1px] mx-4 border-r-[1px] border-disabled h-[35px]"
					></span>
					<span class="font-bold text-lg">Kia Tokyo</span>
				</div>
			</div>
			<div>
				<div
					class="footer-menu mt-[65px] gap-7 md:mb-[60px] lg:mb-[125px] grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5"
				>
					<div class="footer-block lg">
						<ul class="footer-menu-item">
							<li class="footer-item">
								<a href="">Главная</a>
							</li>
							<li class="footer-item">
								<a href="">О Дилере</a>
							</li>
							<li class="footer-item">
								<a href="">О Дилере</a>
							</li>
							<li class="footer-item">
								<a href="">О Дилере</a>
							</li>
							<li class="footer-item">
								<a href="">О Дилере</a>
							</li>
						</ul>
					</div>
					<div class="footer-block">
						<div class="footer-block-heading">Авто</div>
						<ul class="footer-menu-item">
							<li class="footer-item">
								<a href="">Запись на сервис </a>
							</li>
						</ul>
					</div>
					<div class="footer-block">
						<div class="footer-block-heading">Покупателям</div>
						<ul class="footer-menu-item">
							<li class="footer-item">
								<a href=""> Запись на сервис </a>
							</li>
						</ul>
					</div>
					<div class="footer-block">
						<div class="footer-block-heading">Владельцам</div>
						<ul class="footer-menu-item">
							<li class="footer-item">
								<a href=""> Запись на сервис </a>
							</li>
						</ul>
					</div>
					<div class="footer-block">
						<ul>
							<li>Sumida City, Tokyo 130-0012, Япония</li>
							<li>
								<a href="" class="active"> +7 778 290 5027 </a>
							</li>
							<li>
								<a href="#"> Мы в социальных сетях </a>
								<div class="flex mt-5">
									<a href="#" class="mr-2">
										<svg
											class="w-[45px] h-[45px] block fill-dark"
										>
											<use
												xlink:href="/images/svg/sprite.svg#instagram"
											></use>
										</svg>
									</a>
									<a href="#" class="mr-2">
										<svg
											class="w-[45px] h-[45px] block fill-dark"
										>
											<use
												xlink:href="/images/svg/sprite.svg#fb"
											></use>
										</svg>
									</a>
									<a href="#" class="mr-2">
										<svg
											class="w-[45px] h-[45px] block fill-dark"
										>
											<use
												xlink:href="/images/svg/sprite.svg#vk"
											></use>
										</svg>
									</a>
									<a href="#" class="mr-2">
										<svg
											class="w-[45px] h-[45px] block fill-dark"
										>
											<use
												xlink:href="/images/svg/sprite.svg#telegram"
											></use>
										</svg>
									</a>
									<a href="" class="mr-2">
										<svg
											class="w-[45px] h-[45px] block fill-dark"
										>
											<use
												xlink:href="/images/svg/sprite.svg#youtube"
											></use>
										</svg>
									</a>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div>
				<div class="flex items-center flex-wrap mt-5 lg:mt-0">
					<div class="basis-full lg:basis-3/4">
						<p class="text-xs text-dgray">
							© 2022 ТОО «Ilbers Auto» ведет деятельность на
							территории РК в соответствии с законодательством РК.
							Реализуемые товары доступны к получению на
							территории РК. Мониторинг потребительского поведения
							субъектов, находящихся за пределами РК, не ведется.
							Сведения о ценах на продукцию бренда Kia,
							содержащиеся на сайте, носят исключительно
							информационный характер и не являются публичной
							офертой. Информация о соответствующих моделях и
							комплектациях и их наличии, ценах, возможных выгодах
							и условиях приобретения доступна у менеджеров в
							салоне дилера. Товар сертифицирован.
						</p>
					</div>
					<div
						class="mt-[30px] lg:mt-[0] flex justify-start lg:justify-center items-start lg:items-center basis-full lg:basis-3/12"
					>
						<Button
							btnWrapperSize="lg"
							btnWrapperType="transparent"
							btnHref="tell:+777777777"
							btnText="Заказать звонок"
						/>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
import Button from '~/components/FormElements/Button.vue'

export default {
	components: {
		Button,
	},
}
</script>

<style lang="scss" scoped>
.footer-block {
	&.lg {
		a {
			font-size: 18px;
			font-weight: 700;
			color: #fff;
		}
	}

	a {
		font-size: 15px;
		color: #cccccc;
	}

	&-heading {
		margin-bottom: 20px;
		font-size: 18px;
		font-weight: 700;
		color: #fff;
	}

	li {
		margin-bottom: 20px;

		&:last-child {
			margin-bottom: 0;
		}
	}

	.footer-item {
		a {
			@apply relative border-none font-bold inline-block;
			&:after {
				content: '';
				@apply absolute w-full h-[1px] left-[0] bg-white origin-left scale-x-0;
				top: calc(100% + 5px);
				transition: 0.3s ease;
			}

			&:hover::after {
				@apply scale-x-100;
			}
		}
	}
}
</style>
