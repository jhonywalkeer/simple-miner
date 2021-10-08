## 💻 Project summary

The act of 'mining' a bitcoin is basically finding a unique number that, when added to the payload of a
block, produces a final hash that follows a specific rule. In the case of bitcoin, this rule says that the final hash must start with a number of N zeros.

This is an excellent case for parallel processing, because it is a process that takes time and requires heavier computation. Let's simplify the mining model and abstract the core functionality into code that's simpler to understand and focus on our workers. Our ‘miner’ will receive a JSON with the os for this file symbolizes a series of payloads of different blocks.

## :video_game: How to play

Clone this project and run the command:

````npm
node index.js
````
and watch the mining happen by creating a hash for guy "bitcoin"

## 🛠 Technologies

Project was built using **Node.js** only


## 🔨 Local Installation

You need [Node.js](https://nodejs.org) version 10 or higher, but if you want to use [Yarn](https://yarnpkg.com/) you can also just have it on your computer to continue.

```bash
git clone https://github.com/JhonyWalker-pixel/first-api.git

$ cd simple-miner
```

## 📖 License

This project is under license from MIT. See the [LICENSE](LICENSE.md) file for more details.



