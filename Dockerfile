# Use the official Node.js 18 image as a base
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json for dependency installation
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

ARG NEXT_PUBLIC_CONTENTFUL_SPACE_ID_NEW
ARG NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN_NEW
ARG NEXT_PUBLIC_FACEBOOK_PIXEL_ID
ARG NEXT_PUBLIC_LINKEDIN_PARTNER_ID

# Build the Next.js application
RUN npm run build

# Use a lightweight production image
FROM node:18-alpine AS runner

# Set the working directory
WORKDIR /app

# Copy only the necessary files from the builder
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Expose the port
EXPOSE 3000

# Set environment variables (these will be overridden by runtime secrets if provided)
ENV NEXT_PUBLIC_CONTENTFUL_SPACE_ID_NEW=$NEXT_PUBLIC_CONTENTFUL_SPACE_ID_NEW
ENV NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN_NEW=$NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN_NEW
ENV NEXT_PUBLIC_FACEBOOK_PIXEL_ID=$NEXT_PUBLIC_FACEBOOK_PIXEL_ID
ENV NEXT_PUBLIC_LINKEDIN_PARTNER_ID=$NEXT_PUBLIC_LINKEDIN_PARTNER_ID

# Define production mode
ENV NODE_ENV=production

# Command to run the production build
CMD ["npm", "start"]
