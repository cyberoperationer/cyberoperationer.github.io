---
title: "A Sputnik Moment in AI?"
date: 2025-02-02T17:57:01+01:00
draft: false
---


Recent debates have focused on whether DeepSeek’s achievement in generating a new model with comparatively limited resources qualifies as a “Sputnik moment” for Western AI companies. This discussion requires distinguishing between developing an entirely new model and adapting pre-existing models. DeepSeek’s approach exemplifies the latter; their methodology involves refining established large language models rather than constructing a new system from scratch.


![Screenshot from https://ollama.com/library/deepseek-r1](/images/20250202-AI-Sputnik.jpeg)


DeepSeek asserts that its models are “distilled from DeepSeek-R1” and “based on Llama and Qwen” (as seen in the above screenshot, taken from [here](https://ollama.com/library/deepseek-r1)). In this context, “distilled” refers to the process of transferring the reasoning patterns from a larger, complex ["teacher" model to a smaller "student" model](https://www.datacamp.com/blog/distillation-llm). Given that Llama and Qwen were originally developed by Meta and Alibaba Cloud respectively, the adaptation process employed by DeepSeek requires fewer resources than building an entirely new model: a task typically associated with large technology companies.

If DeepSeek had developed an entirely new model, the achievement would align with current achievements and would not necessarily represent a breakthrough. However, by developing a new model, based on existing models and distilled from a third model, this may be a "Sputnik moment." Microsoft's CEO Satya Nadella commented that DeepSeek [“has had some real innovations”](https://www.washingtonpost.com/technology/2025/01/30/deepseek-microsoft-meta-investors/).

Further empirical analysis is required as additional technical details emerge, particularly from independent investigations by entities such as researchers at [Hugging Face](https://huggingface.co/blog/open-r1). 

This case illustrates that organizations can, through adaptation and distillation, develop specialized models optimized for targeted applications at a fraction of the cost of larger, more complex models.


