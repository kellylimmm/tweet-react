import React from 'react';
import ReactDOM from 'react-dom';
import Posts from 'posts';
import Tweets from 'tweets';
// import Linkify from 'react-linkify';


class App extends React.Component {

    render() {
        let showTweets = Tweets.map(tweet => {
            return (
            <div>
            <Posts  name = {tweet.user.name}
                    text = {tweet.text}
                    img = {tweet.user.profile_image_url_https}
                    retweet = {tweet.retweet_count}
                    favorite = {tweet.favorite_count}
            />

            </div>
            )
        });

        return (
          <div>
            {showTweets}
          </div>
        );
    }
}


const element = document.getElementById('app');

ReactDOM.render(<App />, element );

console.log("tweet react");