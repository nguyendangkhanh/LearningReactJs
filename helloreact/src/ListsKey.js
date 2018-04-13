import React, {Component} from 'react'

export function ShowNumber()
{
    return 2;
}

const contentPosts = [
    {id: 1, title: 'This is row A', content: 'Hello Row A'},
    {id: 2, title: 'This is row B', content: 'Hello Row B'},
];

function ListItem(props)
{
    return <li>{props.value}</li>;
}

export function ShowContentPosts(props)
{
    const posts = props.content;
   // const listPosts = posts.map((post) => <li key={post.id}>{post.title}</li>);

  //  return (<ul>{listPosts}</ul>);
    return (
        <ul>{
            posts.map((post) => <ListItem id={post.id} value={post.title} />)
        }</ul>
    );
}

export class BlogContent extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div><ShowContentPosts content={contentPosts} /></div>
        );
    }
    
}