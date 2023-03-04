import React, { useEffect } from 'react'

import styles from '../styles/Blog.module.css'

import Header from '../component/navbar/Navbar'
import Footer from '../component/footer/Footer'

import img_1 from '../assets/Blog/img1.png'
import img_2 from '../assets/Blog/img2.png'
import img_3 from '../assets/Blog/img3.png'
import img_4 from '../assets/Blog/img4.png'
import image_1 from '../assets/Blog/main1.png'
import image_4 from '../assets/Blog/main2.png'
import { useNavigate } from 'react-router-dom'

function Blog() {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const toBlogDetail = () => navigate("/blog/detail");
    return (
        <>
            <Header />

            {/* our blog */}
            <div className={`container-fluid ${styles['blog-top']}`}>
                <div className={`container ${styles['link-bar']}`}>
                    <p>Blog <i className="fa-solid fa-angle-right"></i></p>
                </div>
                <div className={`${styles['our-blog']}`}>
                    <p className={`${styles['our-blog-1']}`}>Our Blog</p>
                    <p className={`${styles['our-blog-2']}`}>Read and enjoy content from us</p>
                </div>
            </div>


            {/* content blog */}
            <div className="container">
                <div className="row">
                    <div className={`col-lg-3 col-md-4 col-sm-12 ${styles['right-content']}`}>
                        <div className={styles.search}>
                            <input type="text" name="" id="" placeholder='search' />
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>

                        <p className={styles.cate}>Categories</p>
                        <div className={styles.categories}>
                            <div className={styles.categories_1}>
                                <p>Furniture</p>
                                <p>Interior</p>
                                <p>Real Estate</p>
                                <p>Construction</p>
                                <p>Buisness</p>
                                <p>Industrial</p>
                                <p>Furniture</p>
                            </div>
                            <div className={styles.categories_1}>
                                <p>1</p>
                                <p>2</p>
                                <p>3</p>
                                <p>4</p>
                                <p>5</p>
                                <p>6</p>
                                <p>7</p>
                            </div>
                        </div>

                        <p className={styles.cate}>Recent News</p>
                        <div className={styles.recent_news}>
                            <div className={styles.recent}>
                                <div className={styles.news}>
                                    <img src={img_1} alt="news" />
                                </div>
                                <div className={styles.news_}>
                                    <p className={styles.news_1}>How To Put Movies On Iphone</p>
                                    <p className={styles.news_2}>24 Apr 2019, 45 mins ago</p>
                                </div>
                            </div>
                            <div className={styles.recent}>
                                <div className={styles.news}>
                                    <img src={img_2} alt="news" />
                                </div>
                                <div className={styles.news_}>
                                    <p className={styles.news_1}>Windows Registry Cleaner Checklist</p>
                                    <p className={styles.news_2}>24 Apr 2019, 45 mins ago</p>
                                </div>
                            </div>
                            <div className={styles.recent}>
                                <div className={styles.news}>
                                    <img src={img_3} alt="news" />
                                </div>
                                <div className={styles.news_}>
                                    <p className={styles.news_1}>Messes Make Memories</p>
                                    <p className={styles.news_2}>24 Apr 2019, 45 mins ago</p>
                                </div>
                            </div>
                            <div className={styles.recent_1}>
                                <div className={styles.news}>
                                    <img src={img_4} alt="news" />
                                </div>
                                <div className={styles.news_}>
                                    <p className={styles.news_1}>Modern Light House</p>
                                    <p className={styles.news_2}>24 Apr 2019, 45 mins ago</p>
                                </div>
                            </div>
                        </div>

                        <p className={styles.cate}>Archives</p>
                        <div className={styles.arcive}>
                            <div className={styles.search}>
                                <input type="text" name="" id="" placeholder='select month' />
                                <i className="fa-solid fa-chevron-down"></i>
                            </div>
                        </div>

                        <p className={styles.cate}>Tags</p>
                        <div className={styles.button_tags}>
                            <button>furniture</button>
                            <button>style</button>
                            <button>life style</button>
                            <button>suka</button>
                            <button>online store</button>
                            <button>real estate</button>
                        </div>

                        <div className={styles.banner}>
                            <p className={styles.banner_1}>add Banner</p>
                            <p className={styles.banner_2}>spectrum@gmail.com</p>
                        </div>
                    </div>


                    <div className={`col-lg-9 col-md-8 col-sm-12 ${styles['right-content']}`}>
                        {/* image right 1 */}
                        <img src={image_1} alt="banner" className={styles.image_preview} />
                        <p className={styles.title_banner}>How to open interior shop?</p>
                        <div className={styles.clock_discount}>
                            <div className={styles.clock}>
                                <i className="fa-solid fa-clock"></i>
                                <span>24 Apr 2019, 45 mins ago, by Admin</span>
                            </div>
                            <div className={styles.clock}>
                                <i className="fa-solid fa-tag"></i>
                                <span>Kids, Interior, Photos</span>
                            </div>
                        </div>
                        <p className={styles.desc_banner}>Maecenas eget congue augue. Sed mollis tempor velit, et tempor justo cursus vel. Phasellus lacinia placerat lacus, vulputate volutpat tellus fringilla eu. Phasellus rhoncus varius tortor, non ultricies felis condimentum eget unc ornare suscipit nulla sagittis faucibu</p>
                        <div className={styles.readmore}>
                            <p onClick={toBlogDetail}>Read More</p>
                            <div className={styles.garis}></div>
                        </div>

                        {/* image 2 */}
                        <div className={styles.image_preview}>
                            <div className={styles.play}>
                                <div className={styles.play_row}>
                                    <i className="fa-regular fa-circle-play"></i>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <p className={styles.title_banner}>Scandinavian Style 2019</p>
                            <div className={styles.clock_discount}>
                                <div className={styles.clock}>
                                    <i className="fa-solid fa-clock"></i>
                                    <span>24 Apr 2019, 45 mins ago, by Admin</span>
                                </div>
                                <div className={styles.clock}>
                                    <i className="fa-solid fa-tag"></i>
                                    <span>Kids, Interior, Photos</span>
                                </div>
                            </div>
                            <p className={styles.desc_banner}>Maecenas eget congue augue. Sed mollis tempor velit, et tempor justo cursus vel. Phasellus lacinia placerat lacus, vulputate volutpat tellus fringilla eu. Phasellus rhoncus varius tortor, non ultricies felis condimentum eget unc ornare suscipit nulla sagittis faucibu</p>
                            <div className={styles.readmore}>
                                <p onClick={toBlogDetail}>Read More</p>
                                <div className={styles.garis}></div>
                            </div>
                        </div>

                        {/* image 3 */}
                        <div className={styles.image_preview_1}>
                            <div className={styles.geser}>
                                <div className={styles.geser_row}>
                                    <i className="fa-solid fa-circle-left"></i>
                                    <i className="fa-solid fa-circle-right"></i>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <p className={styles.title_banner}>Beautiful Workspace for Designer</p>
                            <div className={styles.clock_discount}>
                                <div className={styles.clock}>
                                    <i className="fa-solid fa-clock"></i>
                                    <span>24 Apr 2019, 45 mins ago, by Admin</span>
                                </div>
                                <div className={styles.clock}>
                                    <i className="fa-solid fa-tag"></i>
                                    <span>Kids, Interior, Photos</span>
                                </div>
                            </div>
                            <p className={styles.desc_banner}>Maecenas eget congue augue. Sed mollis tempor velit, et tempor justo cursus vel. Phasellus lacinia placerat lacus, vulputate volutpat tellus fringilla eu. Phasellus rhoncus varius tortor, non ultricies felis condimentum eget unc ornare suscipit nulla sagittis faucibu</p>
                            <div className={styles.readmore}>
                                <p onClick={toBlogDetail}>Read More</p>
                                <div className={styles.garis}></div>
                            </div>
                        </div>


                        {/* image 4 */}
                        <div className={styles.image_preview_2}>
                            <p>Design is the silent ambassador of your brand.</p>
                            <div className={styles.readmore_1}>
                                <div className={styles.garis_1}></div>
                                <p>Joshua Freeman</p>
                            </div>
                        </div>
                        <div className="">
                            <p className={styles.title_banner}>26 Photos of Conner Kid</p>
                            <div className={styles.clock_discount}>
                                <div className={styles.clock}>
                                    <i className="fa-solid fa-clock"></i>
                                    <span>24 Apr 2019, 45 mins ago, by Admin</span>
                                </div>
                                <div className={styles.clock}>
                                    <i className="fa-solid fa-tag"></i>
                                    <span>Kids, Interior, Photos</span>
                                </div>
                            </div>
                            <p className={styles.desc_banner}>Maecenas eget congue augue. Sed mollis tempor velit, et tempor justo cursus vel. Phasellus lacinia placerat lacus, vulputate volutpat tellus fringilla eu. Phasellus rhoncus varius tortor, non ultricies felis condimentum eget unc ornare suscipit nulla sagittis faucibu</p>
                            <div className={styles.readmore}>
                                <p onClick={toBlogDetail}>Read More</p>
                                <div className={styles.garis}></div>
                            </div>
                        </div>

                        {/* image right 1 */}
                        <img src={image_4} alt="banner" className={styles.image_preview} />
                        <p className={styles.title_banner}>How to open interior shop?</p>
                        <div className={styles.clock_discount}>
                            <div className={styles.clock}>
                                <i className="fa-solid fa-clock"></i>
                                <span>24 Apr 2019, 45 mins ago, by Admin</span>
                            </div>
                            <div className={styles.clock}>
                                <i className="fa-solid fa-tag"></i>
                                <span>Kids, Interior, Photos</span>
                            </div>
                        </div>
                        <p className={styles.desc_banner}>Maecenas eget congue augue. Sed mollis tempor velit, et tempor justo cursus vel. Phasellus lacinia placerat lacus, vulputate volutpat tellus fringilla eu. Phasellus rhoncus varius tortor, non ultricies felis condimentum eget unc ornare suscipit nulla sagittis faucibu</p>
                        <div className={styles.readmore}>
                            <p onClick={toBlogDetail}>Read More</p>
                            <div className={styles.garis}></div>
                        </div>

                        <div className={styles.button_page}>
                            <button>1</button>
                            <button>2</button>
                            <button>3</button>
                            <button>4</button>
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </>
    )
}

export default Blog