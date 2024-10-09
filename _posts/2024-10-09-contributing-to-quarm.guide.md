---
sitemap: 'true'
published: 'true'
toc: 'false'
date: '2024-10-09 00:51 -0400'
author: Xanax
keywords: 'Project Quarm, Quarm, EverQuest, github, wiki, post, prose.io'
description: >-
  Quick guide on how to easily contribute to Quarm.Guide using the Prose.io
  controls at the top right corner of the site.
title: How to Contribute to Quarm.Guide using Prose.io
---
## Using Prose.io Overview

_The following guide was made using the Firefox web browser. I lost some functionality using Chrome such as the ability to upload images._

If you'd like to contribute to Quarm.Guide, the prose.io controls are an easy way for non-technical users to add wiki articles and blog posts directly into the site without having to go through the hassle of taking a class on using github and forking the entire repository. You may have already noticed these controls when browsing the site. 

![prose1]({{site.baseurl}}/assets/images/prosio.png)

There are two ways to add content.

#### Add New

Add new places articles under the Wiki section. I typically prefer this for guides that will be linked off of the other sections on the site. This is where the majority of content exists on quarm.guide.

#### Add Post

The website also has a blog post function, typically found on the bottom left. These are often reserves for one-off posts and topics. 

In the end it really doesn't matter too much and if needed, I can move content around as needed afterwards. Once you choose one, you'll be presented with the prose.io markdown editor. 

## Step 1 Create a Github Account

Before we can proceed, you're going to need a github.com account. Don't worry, you shouldn't need to interact with github beyond signing up for an account. You can find simple instructions [HERE](https://docs.github.com/en/get-started/start-your-journey/creating-an-account-on-github)

## Step 2 Authorize prose.io with your Github Account

Back in the prose.io editor we opened in the overview. The page layout shows some controls at the top, content in the body, and a sidebar on the far right. At the bottom of the sidebar should be a button for authorizing prose.io with your github account. 

## Step 3 Add Your Content

Quarm.Guide is mostly written in markdown, a simple formatting language that many websites and programs understand. You can find a help ? button at the top that will help you understand links, images, paragraphs, etc. 

#### Adding Images

prose.io has the ability to allow you to upload images directly to quarm.guide by dragging them into the web browser. I found the feedback to be misleading, and the Insert Image > Upload Image function to be more reliable in uploading and displaying the proper markdown on the page.  

#### Front Matter

Front matter is a set of tags at the top of the page that tells the website the title, date, author, and keywords for a page. Sometimes this is also referred to as _metadata_. You can add this information my clicking the Metadata button on the sidebar. The page will guide you on how to add everything you need.

## Step 4 Title

At the very top of the page, you'll see the file name for the post you're making, which is also considered as the title. 

`untitled`

I recommend choosing something short and simple that describes the content of your post. This will be used as the file name for your post within the github repository.

## Step 5 Preview and Save

You then have the option to press the Preview button to see a sample of what the final page should look like. When you are satisfied, press the Save icon to push the request up to the quarm.guide repository. This will create what is called a "Pull Request" where it will have to be approved by the website maintainer before being published on Quarm.Guide. Before you "Submit" your post, you'll be asked for another short description. All "Pull Requests" require a description. Think of this as a short message to the website maintainer to describe your request. 

## Edit

Once the post is published on Quarm.Guide you can always view the article and press the Edit button. Here you can edit any page's content and submit them to the site for approval.

## Removal

When editing a post, you can click on the Settings button on the right. Only the maintainer of Quarm.Guide has the ability to delete a post. If you want to remove your post, you can click the "Unpublish" button at the top of the tool bar. You will then have to save and submit another "Pull Request", which must then be approved to remove the post.

## Limitations

The drawback of the prose.io module is that it does not support autocorrect or spellchecking. Make sure to double check what you post. If you do make an error though, you can easily edit and correct it.
