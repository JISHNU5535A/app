# Deployment Guide 📩

This guide will help you through deploying a `Flutter` application
into the two main app stores in the mobile ecosystem: 
`iOS AppStore` and `Android PlayStore`.

Because we are using `Flutter`,
the way one builds, packages and ships an application
will differ from the native way.

So, let's start!

- [Deployment Guide 📩](#deployment-guide-)
  - [🤖 Google `PlayStore`](#-google-playstore)
    - [0. Pre-requisites](#0-pre-requisites)
      - [Creating a `Google Play` account](#creating-a-google-play-account)
      - [Review your app files](#review-your-app-files)
        - [Setting up a splash screen](#setting-up-a-splash-screen)
        - [Adding a launcher icon](#adding-a-launcher-icon)
        - [Reviewing the `AndroidManifest` file](#reviewing-the-androidmanifest-file)
        - [Reviewing the `Gradle` build configuration](#reviewing-the-gradle-build-configuration)


## 🤖 Google `PlayStore`

Let's start with Google's `PlayStore`!


### 0. Pre-requisites

Before we start our guide,
we are going to make sure everything is correctly setup
so **every time we need to deploy, we can go back here and follow the checklist properly**.


#### Creating a `Google Play` account

We first need to create a `Google Play` account,
so we can distribute our applications.
Head over to https://developer.android.com/distribute
and click on `Sign In` on the top right corner.
You may use your personal or company's Google account to do this.

<p align="center">
  <img width="800" src="https://github.com/dwyl/app/assets/17494745/854713e7-4bfc-4c8d-b1cb-60e548c686fb" />
</p>

After signing in, click on the `Sign in to Play Console`.
This will redirect you to a sign-up page,
where you will need to choose between using a **personal developer account**
or **as part of an organization**.

If you choose the latter, 
you will have to provide additional information.
If you're not using an e-mail with your company's domain,
Google will suggest you to use the "personal account" route.

In this guide's case,
we'll choose the `Yourself` option, 
as it's easier to setup.
What matters here is that we have an account that we can use to publish apps.

<p align="center">
  <img width="800" src="https://github.com/dwyl/app/assets/17494745/c4033d57-17ca-4339-8bbd-37e8caf80217" />
</p>

Choose the option.
In our case, 
we'll have these requirements.
You'll have to pay a `25 USD` fee in either one.

<p align="center">
  <img width="800" src="https://github.com/dwyl/app/assets/17494745/8c87b059-7bf3-45e8-a4a0-d63a284f2603" />
</p>

After clicking on `Continue`, you'll have to create a payment profile
for verification purposes.
This payment profile will also be used to pay the registration fee.

Click on `Create or select payments profile`
and go through the steps of adding your debit/credit card.
Once that is finished, 
you may press `Next`.

After clicking `Next`, 
you will be prompted to fill in your **Public Developer Profile**.

<p align="center">
  <img width="800" src="https://github.com/dwyl/app/assets/17494745/9f9398cf-49b9-4563-8de8-de96b7227949" />
</p>

Just fill the requested fields with your e-mail address,
acknowledging sending the information to Google.

Click `Next`.

<p align="center">
  <img width="800" src="https://github.com/dwyl/app/assets/17494745/f43b200e-98a3-4ead-9335-88e2854c0304" />
</p>

Fill out the requested information.
Google will ask you for information regarding prior experience
you may have had developing applications in the Play Store.
It will also ask if you've used other Google Accounts
in the `Google Play` ecosystem (this is just to speed up verification).

Fill the requested parameters and click `Next`.

<p align="center">
  <img width="800" src="https://github.com/dwyl/app/assets/17494745/47de3f0f-ae19-4229-88cf-9cf3d3534c19" />
</p>

In this `Apps` section,
just truthfully answer your app development plans.

Click `Next`.

<p float="left">
  <img src="https://github.com/dwyl/app/assets/17494745/046ac90d-87a0-4757-87a0-28c4b39eaf64" width="49%" />
  <img src="https://github.com/dwyl/app/assets/17494745/29a2bd2f-fb16-4932-93fc-78321f568302" width="49%" />
</p>

Agree to all the terms, 
pay the registration fee and,
upon success, 
you will have your very own developer account! 🎉

After this, you can access your newly created developer account
in the `Play Console` by clicking the `Go to Play Console` button.

<p align="center">
  <img width="800" src="https://github.com/dwyl/app/assets/17494745/5e184de5-6716-4863-adc0-4139d401b007" />
</p>

You may be asked to finish setting up your account.
You will need to complete the verification
by sending your legal documents so Google knows it's really you
who's creating the account.

**You will need to complete this verification to publish apps on `Google Play`**.



#### Review your app files

Now that we have created an account,
before publishing an app,
we ought to review some files.
It's not necessary to do this *every time* we update the app,
since these changes can be made in one go and be persisted across the development cycle.

*However*, we'll list them here as a preliminary check-up 
before rolling out the first version of the app.


##### Setting up a splash screen

Splash screens (also known as launch screens) 
provide a simple initial experience while the Android app loads. 
They set the stage for your application,
while allowing time for the app engine to load and your app to initialize.

We recommend checking the official guide over at 
https://docs.flutter.dev/platform-integration/android/splash-screen
to set up a simple splash screen.
It's a simple couple of changes that ultimately make a heap of difference!


##### Adding a launcher icon

When a new Flutter app is created, it has a default launcher icon.
To customize this icon, 
the most practical way is using 
[`flutter_launcher_icons`](https://pub.dev/packages/flutter_launcher_icons).
By using this package, it will automatically generate icons on all platforms
with the appropriate dimensions, covering all edge cases.


##### Reviewing the `AndroidManifest` file

Reviewing the default [App Manifest](https://developer.android.com/guide/topics/manifest/manifest-intro)
found in `AndroidManifest.xml`,
located in `android/app/src/main`
is important, as it holds relevant information regarding the application
that will be shown on the store.
It also defines permissions needed when using the application.
Two important changes include:

- `application`: editing the `android:label` in the
[application](https://developer.android.com/guide/topics/manifest/application-element) tag will ultimately be the final name of the application.
- `uses-permission`: adding `android.permission.INTERNET`
[permission](https://developer.android.com/guide/topics/manifest/uses-permission-element)
will be needed if the app needs internet access.


##### Reviewing the `Gradle` build configuration

Next up, checking if the [`Gradle build file`](https://developer.android.com/studio/build/#module-level)
located in `android/app` is important for the building phase of the application.
The most important fields to check are:

- `applicationId`, which specifies the [application ID](https://developer.android.com/build/configure-app-module#set-application-id).
- `minSdkVersion`, specifying the [minimum API level](https://developer.android.com/studio/publish/versioning#minsdk) needed to run the app.
With Flutter, it defaults to `flutter.minSdkVersion`,
though you may have to change this specifically sometimes 
if some library requires it.
- `targetSdkVersion`, the target API level the app was designed to run.
Defaults to `flutter.targetSdkVersion`.
- `versionCode`, integer number used as an [internal version number](https://developer.android.com/studio/publish/versioning).
It is used to determine whether one version of the app
is more recent than another. 
**It is not shown to users**.
- `versionName`, version number of the app shown to users.
- `compileSdkVersion`, specifying the API level `Gradle` should use to compile the app.
Defaults to `flutter.compileSdkVersion`.
