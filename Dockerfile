FROM ruby:2.6-slim

WORKDIR /srv/slate

VOLUME /srv/slate/source
EXPOSE 4567

COPY . /srv/slate

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        build-essential \
        nodejs

# Install the updated bundler version
RUN gem install bundler -v 2.4.22

# Install the dependencies
RUN bundle install

# Clean up to reduce image size
RUN apt-get remove -y build-essential  \
    && apt-get autoremove -y \
    && rm -rf /var/lib/apt/lists/*

CMD ["bundle", "exec", "middleman", "server"]
