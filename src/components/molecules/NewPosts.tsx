/* eslint-disable react/display-name */
import { memo } from 'react'
import { NewPostsSlide } from 'components/atoms/NewPostsSlide'

import SwiperCore, { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
SwiperCore.use([Navigation, Pagination])

// import styles from 'styles/components/molecules/NewPosts.module.scss'

export const NewPosts: React.VFC = memo(() => {
  return (
    <div className="swiper_newposts">
      <Swiper
        spaceBetween={50}
        slidesPerView="auto"
        navigation={{
          nextEl: '.next_button',
          prevEl: '.prev_button',
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
      >
        <SwiperSlide>
          <NewPostsSlide>OK</NewPostsSlide>
        </SwiperSlide>
        <SwiperSlide>
          <NewPostsSlide>DK</NewPostsSlide>
        </SwiperSlide>
        <SwiperSlide>
          <NewPostsSlide>DO</NewPostsSlide>
        </SwiperSlide>
      </Swiper>
      <div>
        <button className="next_button" aria-label="swiper-next"></button>
        <button className="prev_button" aria-label="swiper-prev"></button>
      </div>
    </div>
  )
})
