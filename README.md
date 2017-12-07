# uPort Demonstration
### Login With Ethereum Mini Application

The boilerplate is opinionated. In fact, it's not really a boilerplate. I've made a lot of application architecture decisions. It's more of application launchkit, which also happens to have Ethers, uPort and Infura integrated into the React/Redux/Saga workflow.

![Resources](documentation/assets/frontDemo.gif)
### Who
Blockchain Developers

### What
Prototyping Applications with uPort (Etheruem) Login

### Why
The future deserves *dope* dApps.


# Infrastructure

The Project has several important high-level folders.

- assembly <----- WebAssebmly/C++
- build <----- Deployable Assets
- configuration <----- Build Management
- contracts <----- Ethereum Smart Contracts
- documentation 
- functions <----- Serverless Cloud Functions (Firebase)
- public <----- Static Entry
- scripts <----- Build Logic
- src <---- Primary Javascript

The ```src``` folder contains the root entry files for the application, extensions and page plugins.
The ```build``` folder contains the bundled/optimized entry files for the application, extension and embedable dapps.
The ```contracts``` folder contains application specific smart contracts.
The ```assembly``` folder contains application specific C++/Go/Rust for WebAssembly target ouput.
The ```embed``` folder contains modular components/mini-applications with 1 line Javascript embeds


## 1 Project - 3 Build Systems
#### Browser Application, Extension and Page Plugin
3 seperate build files can be generated from the project scaffolding.

1. Progressive Web Application 
2. Chrome Browser Extension | Working
3. Embeddable Javascript | Barebones == Not Ready

The dApp Boilerplate will build 3 seperate Javascript "applications" from a few simple CLI commands.

```
yarn build
yarn extension
yarn embed
```

The project was driven by personal desire - I want to design,create and experiment, without technical limitations constantly arising. However, on the flip-side, I also want full control over inherntly complex systems/mechanisms. Sacraficing in either department is unacceptable. Essentially, the designer/developer/entrepreneur in me wants an idea platform.

```
src
- application (src/application)
- extension (src/extension)
- embed (src/embed)
- core (src/core)
```


**Why?**

A unified build workflow to quickly deploy infrastructure in minutes, not days.

The The dApp Boilerplate  project takes a modular components/containers approach. By seperating core logic into a self-contained file systems, features can more easily be added/edited/removeed for each unique project. Essentially, modularity equals core ui/ux across the ```app, extension and embed``` build process. In the future, Blockchain Smart Contracts can automatically added/removed to build process as we begin to standarize.

# How It Works
The Browser Application, Chrome Extension and Page Plugin (embed) codebase all "reach" back into the core folder for shared components, containers and fetching logic. 

It's a little confusing at the moment, because it's **not obvious** where a developer should look.

```
/*--- Interface ---*/
assembly: path.resolve(__dirname, '../src/core/assembly'),
assets: path.resolve(__dirname, '../src/core/assets'),
assimilation: path.resolve(__dirname, '../src/core/assimilation'),
components: path.resolve(__dirname, '../src/core/components'),
containers: path.resolve(__dirname, '../src/core/containers'),
entity: path.resolve(__dirname, '../src/core/entity'),
foundry: path.resolve(__dirname, '../src/core/foundry'),
forms: path.resolve(__dirname, '../src/core/forms'),
factory: path.resolve(__dirname, '../src/core/factory'),
workshop: path.resolve(__dirname, '../src/core/workshop'),
wrappers: path.resolve(__dirname, '../src/core/wrappers'),
```
The aliases provide a simply way for component developers to request shared component/containers within the application, extension and embed build process.
