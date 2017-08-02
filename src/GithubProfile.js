import React, {Component} from 'react';
class GithubProfile extends Component {
    
    constructor() {
        super()
        this.state = { user: ""};
    }
    
    fetchData() {
        // console.log(this)
        fetch(`https://api.github.com/users/${this.props.username}`)
        .then(r => r.json()) 
        .then(data => {
            this.setState({
                user: data
            })
        }) 
    }
    
    componentDidMount() {
        this.fetchData();
    }
    
    componentDidUpdate(prevProps, prevState) {
        // check if prevProps username is same as new username
        ///If and only if they are different, do another call to this.fetchData. 
        //Since fetchData is using this.props to do its job, it will fetch the new user info :)
      // 'The fee is ' + (isMember ? '$2.00' : '$10.00');
    //   console.log(prevProps)
      if (prevProps.username !== this.props.username) { 
          this.fetchData()
        // console.log(prevProps)
      }
    
    }
    
    render() {
            if (this.state.user) {
            // if (this.props.username) {
                let user = this.state.user;
            return (
            <div className="github-user">
              <img className="github-user__avatar" src={user.avatar_url} alt="user" />
              <div className="github-user__info">
                <p>{user.name}</p>
                <p>{user.bio}</p>
              </div>
            </div>
            )
        }
        else {
            return <div>Loading....</div>
        }
        
    }
}
export default GithubProfile;