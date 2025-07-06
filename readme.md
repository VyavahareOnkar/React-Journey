#React Learnings

#package.json is configuration of our npm.

#bundler: it bundles our app /packages our app so that it can shift to production. e.g. webpack, parcel, vite.

#create-react-app uses webpack bundler.

#package.json: ^(caret) can upgrade minor package versions, ~(tilde) can upgrade major package version dependencies.

#package-lock.json: it contains exact version of all transitive package dependencies. It will not have ^ or ~ before package versions. It will also have integrity has stored inside it so that we can verify the production or deployed version to avoid issues.

#node_modules: Collection of dependencies. when we install any package using npm it will fetch all the code of that package into node_modules. its like a database of our packages from where our packages are operated. Even if we install one package it will have lot of file in our node_module because each package can have their own dependencies and those can have their own dependenciesk, this is called transitive dependencies.

#if I have package.json and package-lock.json, I can recreate my node modules with exact versions of my packages.

#Parcel

- Dev Build
- Local Server
- HMR - Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching = Faster builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling = Support Older Browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking = Remove unused Code
- Different dev and prod bundles
