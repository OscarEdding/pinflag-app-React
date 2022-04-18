import React from 'react'

import { ContainerHeader, ContainerBlog } from "./Blog.style";

import { FaRegClock } from "react-icons/fa";

const Blog = () => {
  return (
    <div>
      <ContainerHeader>
        <div className="header-title">
          <h2>Blog</h2>
        </div>
        <div className="header-body">
          <p>
            En este espacio te compartiremos información que pueda ser
            ¡relevante para ti!
          </p>
        </div>
      </ContainerHeader>
      <main>
        <ContainerBlog>
          <div>
            <article>
              <div>
                <div>
                  <a href="/blog/2021/06/03">
                    <img
                      src="https://pinflag.cl/wp-content/uploads/2021/06/post-linkedin-300x115.png"
                      class="attachment-medium size-medium"
                      alt=""
                    />
                  </a>
                </div>
                <div>
                  <header>
                    <h2>
                      <a href="/blog/2021/06/03">
                        Nuestro propósito es conectar a los e-commerce con red
                        de puntos Click and Collect a nivel Nacional!
                      </a>
                    </h2>
                  </header>
                  <div>
                    <p>
                      Para nadie es novedad el crecimiento acelerado que tuvo
                      el...
                    </p>
                    <a className="see-more" href="/blog/2021/06/03">
                      Leer más
                    </a>
                  </div>
                  <div>
                    <span className="center-clock">
                      <i>
                        <FaRegClock size="12" />
                      </i>
                      <time datetime="junio 3, 2021">junio 3, 2021</time>
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </ContainerBlog>
      </main>
    </div>
  );
}

export default Blog