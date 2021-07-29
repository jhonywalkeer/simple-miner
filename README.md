## :clipboard: About the project

The act of 'mining' a bitcoin is basically finding a unique number that, when added to the payload of a
block, produces a final hash that follows a specific rule. In the case of bitcoin, this rule says that the final hash must start with a number of N zeros.

This is an excellent case for parallel processing, because it is a process that takes time and requires heavier computation. Let's simplify the mining model and abstract the core functionality into code that's simpler to understand and focus on our workers. Our ‘miner’ will receive a JSON with the os for this file symbolizes a series of payloads of different blocks.


