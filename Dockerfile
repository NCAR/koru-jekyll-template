FROM jekyll/jekyll:3.8.6

WORKDIR /project

CMD jekyll serve --trace --port 4004
