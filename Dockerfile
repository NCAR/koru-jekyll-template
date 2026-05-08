FROM jekyll/jekyll:4.2.2

WORKDIR /project

CMD jekyll serve --trace --port 4004
