/* eslint-disable react/display-name */
import { memo } from 'react'
import { NewPostsSlide } from 'components/atoms/NewPostsSlide'

import SwiperCore, { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useRecoilValue } from 'recoil'
import { winWidth } from 'store/winWidth'
SwiperCore.use([Navigation, Pagination])

// import styles from 'styles/components/molecules/NewPosts.module.scss'

export const NewPosts: React.VFC = memo(() => {
  const windowWidth = useRecoilValue(winWidth)
  return (
    <div className="swiper_newposts">
      <Swiper
        //  初回レンダリング時にwindowWidthが取得されるため、nullの可能性はないと判断
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        spaceBetween={windowWidth! <= 800 ? 30 : 100}
        //  初回レンダリング時にwindowWidthが取得されるため、nullの可能性はないと判断
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        slidesPerView={windowWidth! <= 800 ? 1 : 3}
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
        <button className="next_button" aria-label="swiper-next" />
        <button className="prev_button" aria-label="swiper-prev" />
      </div>
    </div>
  )
})
