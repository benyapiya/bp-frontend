## Building the application
` $ npm run build`

## Building the container
` $ docker build -f Dockerfile -t $DOCKER_USER_ID/bp-frontend . `

## Running the container
` $ docker run -d -p 80:80 -v nginx-web-doc:/usr/share/nginx/html $DOCKER_USER_ID/bp-frontend `

## Pushing the container
` $ docker push $DOCKER_USER_ID/bp-frontend `
