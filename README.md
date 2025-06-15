# ThinkBoard - Note Management Application

ThinkBoard is a full-stack note-taking application that allows users to create, read, update, and delete notes with a clean, modern interface featuring a dark forest theme.

![ThinkBoard Screenshot](https://raw.githubusercontent.com/lucastgama/think-board/refs/heads/feature/frontend-setup/image.png)

## 📋 Features

- Create and manage notes with title and content
- Responsive design that works on mobile and desktop
- Modern UI with dark theme using DaisyUI
- Real-time notifications for user actions
- API rate limiting for security

## 🛠️ Tech Stack

### Frontend

- [React 19](https://react.dev/) - UI library
- [Vite](https://vitejs.dev/) - Build tool
- [React Router](https://reactrouter.com/) - Navigation
- [TailwindCSS](https://tailwindcss.com/) - Styling
- [DaisyUI](https://daisyui.com/) - Component library
- [Lucide React](https://lucide.dev/) - Icon library
- [React Hot Toast](https://react-hot-toast.com/) - Notifications
- [Axios](https://axios-http.com/) - API requests

### Backend

- [Express](https://expressjs.com/) - Web framework
- [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/) - Database
- [Upstash Redis](https://upstash.com/) - Rate limiting
- [CORS](https://www.npmjs.com/package/cors) - Cross-origin resource sharing

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- MongoDB database (local or Atlas)
- Upstash Redis account for rate limiting

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/think-board.git
cd think-board
```

2. Set up environment variables:

Create a `.env` file in the [`backend`](backend) directory:

```
PORT=3000
MONGO_URI=your_mongodb_connection_string
CORS_ORIGIN=http://localhost:5173
UPSTASH_REDIS_REST_URL=your_upstash_redis_rest_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_rest_token
```

3. Install backend dependencies and start the server:

```bash
cd backend
npm install
npm run dev
```

4. In a new terminal, install frontend dependencies and start the development server:

```bash
cd frontend
npm install
npm run dev
```

5. Open your browser and navigate to [http://localhost:5173](http://localhost:5173)

## 📝 Usage

- **Create a Note**: Click on the "New Note" button in the header
- **View Notes**: All notes are displayed on the homepage
- **Edit a Note**: Click on any note to view and edit its details
- **Delete a Note**: Click the trash icon on a note card or use the delete button in the note detail view

## 🧪 Testing

The application includes rate limiting. If you try to create or edit too many notes in a short period, you'll see a rate limit error message.

## 📦 Building for Production

### Frontend

```bash
cd frontend
npm run build
```

The build output will be in the `frontend/dist` directory.

### Backend

```bash
cd backend
npm start
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/think-board/issues).

## 📄 License

This project is [ISC](https://opensource.org/licenses/ISC) licensed.
