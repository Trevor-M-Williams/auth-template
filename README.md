# Next.js with Firebase Authentication Template

This is a starter template for [Next.js](https://nextjs.org/) that includes Firebase authentication.

## What's Inside?

This project is a basic starting point for an application that requires user authentication. It uses Next.js for the frontend, and Firebase for user authentication.

Here's what you'll find in this template:

- Next.js
- Firebase Authentication
  - Email/Password Authentication
  - Google Authentication
- Protected routes
- User context to easily access user information
- Login and registration pages

## Getting Started

### Prerequisites

You need to have [Node.js](https://nodejs.org/) and npm installed on your computer. If you don't have them installed, you can download them from the official website.

### Setting up Firebase

You need to setup Firebase in the Firebase console and add your Firebase project credentials to the project:

1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Click on "Add project" and follow the prompts to create a new Firebase project.
3. After creating your project, navigate to your project settings by clicking the gear icon in the left sidebar and then click on "Project Settings".
4. Under the "General" tab, scroll down to "Your apps" and click on the "</>" icon to register a new web app.
5. Once the app is registered, you'll be given an object containing your Firebase configuration.

### Environment Variables

The Firebase configuration object should be stored as environment variables. This ensures that sensitive credentials are not pushed to the Git repository. Next.js allows us to load environment variables from a `.env.local` file.

To set this up:

1. Create a new file in the root directory of your project named `.env.local`.

2. Inside this file, you can set the Firebase configuration object as environment variables:

```plaintext
NEXT_PUBLIC_Firebase_API_Key=your_api_key
NEXT_PUBLIC_Auth_Domain=your_auth_domain
NEXT_PUBLIC_Project_Id=your_project_id
NEXT_PUBLIC_Storage_Bucket=your_storage_bucket
NEXT_PUBLIC_Message_Sender_Id=your_messaging_sender_id
NEXT_PUBLIC_App_Id=your_app_id
```

Replace `your_api_key`, `your_auth_domain`, etc with your actual Firebase configuration values. Make sure not to have quotes around these values and no spaces around the equals sign.

3. After setting these environment variables, you can access them in your application code using `process.env`:

```javascript
const config = {
  apiKey: process.env.NEXT_PUBLIC_Firebase_API_Key,
  authDomain: process.env.NEXT_PUBLIC_Auth_Domain,
  projectId: process.env.NEXT_PUBLIC_Project_Id,
  storageBucket: process.env.NEXT_PUBLIC_Storage_Bucket,
  messagingSenderId: process.env.NEXT_PUBLIC_Message_Sender_Id,
  appId: process.env.NEXT_PUBLIC_App_Id,
};
```

> Note: You need to restart your development server after setting these environment variables.

> Important: Be sure to add `.env.local` to your `.gitignore` file so it is not committed to Git. This file typically contains sensitive information and should not be shared.

This setup allows us to keep sensitive information out of our code. This is especially important when working on open source projects or when working with a team.

```javascript
const config = {
  apiKey: `${process.env.NEXT_PUBLIC_Firebase_API_Key}`,
  authDomain: `${process.env.NEXT_PUBLIC_Auth_Domain}`,
  projectId: `${process.env.NEXT_PUBLIC_Project_Id}`,
  storageBucket: `${process.env.NEXT_PUBLIC_Storage_Bucket}`,
  messagingSenderId: `${process.env.NEXT_PUBLIC_Message_Sender_Id}`,
  appId: `${process.env.NEXT_PUBLIC_App_Id}`,
};
```

### Running the Project

1. Clone this repository

```bash
git clone git@github.com:your-username/your-repository.git
```

2. Install the dependencies

```bash
npm install
# or
yarn
```

3. Run the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the page by modifying `pages/index.js`.

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/) from the creators of Next.js.

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
