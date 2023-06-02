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

Copy the configuration object and replace the dummy configuration in `firebase.js` file with your own configuration:

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
