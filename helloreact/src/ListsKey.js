import React, {Component} from 'react'

export function ShowNumber()
{
    return 2;
}

export const posts = [
    {id: 1, title: 'This is row A', content: 'Hello Row A'},
    {id: 2, title: 'This is row B', content: 'Hello Row B'},
];

export function ShowContentPosts(props)
{
    const posts = props.numbers;
    const listPosts = posts.map((post) => <li key={post.toString()}>{post}</li>);

    return (<ul>{listPosts}</ul>);
}