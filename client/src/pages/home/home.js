import React, { useEffect, useState } from 'react';
import { animate } from '../../utils';
import Chart from '../../components/chart';
import { getComments, getPosts, getUsers } from '../../api-gateway';
import johnImgSrc from '../../assets/john.png'
import { Online } from '../../components/svg-icons/svg-icons';
import PageContainer from '../../components/page-container'
import './home.scss'
import ProgressBar from '../../components/progress-bar/progress-bar';

const Home = () => {

    const [comments, setComments] = useState([]);
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        const populateUser = async () => {
            const [comments, posts, users] = await Promise.all([getComments(), getPosts(), getUsers()])
            setComments(comments);
            setPosts(posts);
            setUsers(users);
            setLoading(false);
        }

        populateUser();

    }, [])

    const totalStats = [
        {
            total: '£563,350',
            description: 'Your net worth as of today'
        },
        {
            total: '£12,430',
            description: 'Monthly Cashflow'
        },
        {
            total: '£161,430',
            description: 'Overall Liabilities'
        }]

    const Card = ({ total = '£563,350', description = '', className = '', textClass }) => (
        <div className={`home__card ${className}`}>
            <div className={textClass}>
                <div className="fz-2 ff-1"> {total} </div>
                <small className="home__description"> {description} </small>
            </div>
        </div>
    )


    const Avatar = ({ imgSrc, width = "35", height = "35" }) => (
        <div>
            <img src={imgSrc} alt="cat" width={width} height={height} />
        </div>
    )
    const getAnimation = (index) => {
        if (index === 1) {
            return 'fadeInDown'
        }
        else {
            return 'fadeInTopRight faster'
        }
    }

    const Stats = () => (
        <div className="home__block">
            <strong> Quick Stats </strong>
            <div className="flex-row">
                {totalStats.map(({ total, description }, index) =>
                    <Card
                        key={index.toString()}
                        total={total}
                        description={description}
                        className={index === 0 && animate('fadeInDown')}
                        textClass={index > 0 && animate(getAnimation(index))} />)}
            </div>
        </div>
    )

    const Finance = () => (
        <div className="home__block">
            <div className={animate('fadeInUp')}> <strong>  My financial Health </strong></div>
            <div className="home__card" style={{ minHeight: '2.6rem' }}>
                <div className="mt-0"> <ProgressBar /> </div>
                <div className="flex-row content-between" style={{ fontWeight: 'bold' }}>
                    <div> <small style={{ color: '#d67a67' }} > POOR </small> </div>
                    <div> <small style={{ color: '#e6b36c' }} > AVERAGE </small> </div>
                    <div> <small style={{ color: '#5cc14f' }}> GOOD </small> </div>
                </div>
            </div>
        </div>
    )

    const PerformanceChart = () => (
        <div className={`home__block ${animate('fadeInDown')}`}>
            <strong> My Performance</strong>
            <div className="mt-2"> <Chart width={650} /></div>
        </div >
    )

    const GoalCard = () => (
        <div className="home__goal">
            <div className="flex-column">
                <div className="self-center"> <strong> Running </strong> </div>
                <div className="self-center home__circle content-mid mt-1">
                    <div>
                        <div className="content-mid"> <strong> 100% </strong> </div>
                        <div className="content-mid"> On Track </div>
                    </div>
                </div>

                <div className="home__prices mt-2 flex-row">
                    <span className="mx-1"> £563,3 </span>
                    <span className="mx-1 text-muted"> £1,5000,00 </span>
                </div>
            </div>
        </div>
    )

    const renderGoals = () => (
        <div className="home__block home__goals">
            <div> <strong> My Goals </strong> </div>
            <div className="flex-row mt-1">{[3, 4, 4].map((g, index) => <GoalCard key={index.toString()} />)}</div>
        </div>
    )


    const Feed = ({ title, body, id }) => (
        <div className="home__feed flex-column mt-2" key={id} >
            <small> {new Date().toDateString()} </small>
            <div> <strong> {title} </strong>   </div>
            <div className="mt-1" > {body} </div>
            <a href="#"> Read full article </a>
        </div>
    )

    const NewsFeed = () => (
        <div className="home__block home__news" style={{ minWidth: '37.5rem' }}>
            <h3> Industry News </h3>
            {posts.map((post) => (<Feed {...post} key={post.id} />))}
            <div className="mt-2"> </div>
        </div>
    )

    const Comment = ({ comment }) => (
        <div className="flex-row home__comment mt-0">
            <div> <Avatar imgSrc={johnImgSrc} />  </div>
            <div className="mx-2">
                <div><strong> {comment.name} </strong> </div>
                <div><small> 2 hours ago </small> </div>
                <div className="mt-0"> <small>{comment.body}</small> </div>
            </div>
        </div>
    )

    const User = ({ user }) => (
        <div className="flex-row home__user mt-2">
            <div> <Avatar imgSrc={johnImgSrc} width={55} height={55} />  </div>
            <div className="mx-2">
                <div className><strong> {user.name} </strong> </div>
                <div> <span> <Online /> </span> <small> online </small> </div>
            </div>
        </div>
    )

    if (loading) {
        return null;
        // return <div className="mx-2 mt-2"> Loading... </div>;
    }

    return <PageContainer>
        <div className="home">
            <div className="flex-row mt-1">
                <div className="fz-2 ff-1"> Dashboard Home  </div>
                <div className="line"> </div>
            </div>

            <div className="home__stats flex-row mt-1">
                <Stats />
                <Finance />
            </div>

            <div className="home__performance ">
                <PerformanceChart />
                {renderGoals()}
            </div>

            <div className="home__newsfeed flex-row">
                <NewsFeed />

                <div className="home__block flex-row">
                    <div className="home__news home__block-half mx-3">
                        <h3> Top Comments </h3>
                        {comments.map((comment) => <Comment comment={comment} key={comment.id} />)}
                    </div>

                    <div className="home__news home__block-half">
                        <h3> Users </h3>
                        {users.slice(0, users.length - 1).map((user) => <User user={user} key={user.id} />)}
                    </div>
                </div>
            </div>

        </div>
    </PageContainer>
}

export default Home;