# Multi-stage Dockerfile for Next.js Frontend and Express Backend

# Stage 1: Build the Next.js frontend
FROM node:18-alpine AS frontend-builder
WORKDIR /app/frontend
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Setup the Node/Express backend
FROM node:18-alpine AS backend
WORKDIR /app/backend
COPY backend/package*.json ./
RUN npm install --production
COPY backend/ .

# Stage 3: Production Runner
FROM node:18-alpine AS runner
WORKDIR /app

# Copy Backend
COPY --from=backend /app/backend ./backend
# Copy Frontend Build
COPY --from=frontend-builder /app/frontend/.next/standalone ./frontend
COPY --from=frontend-builder /app/frontend/.next/static ./frontend/.next/static
COPY --from=frontend-builder /app/frontend/public ./frontend/public

# Expose ports for both services
EXPOSE 3000
EXPOSE 5000

# Start script
# In production, a process manager like PM2 or a custom runner script should boot both
# For this Dockerfile, we will just echo instructions since usually they run in separate containers.
CMD ["sh", "-c", "echo 'Start Backend: cd backend && npm start' && echo 'Start Frontend: cd frontend && node server.js'"]
