import React from 'react';
import { Link } from 'react-router-dom';
import TeamData from "../../data/team/TeamData.json";
import { slugify } from '../../utils';

const allData = TeamData;

const TeamOverseas = (teamData) => {
    const delhiTeam = allData.filter(data => slugify(data.category ? data.category : "") === "delhi");
    const dubaiTeam = allData.filter(data => slugify(data.category ? data.category : "") === "dubai");
    const hyderabadTeam = allData.filter(data => slugify(data.category ? data.category : "") === "hyderabad");
    // const mumbaiTeam = allData.filter(data => slugify(data.category ? data.category : "") === "mumbai");
    const bangaloreTeam = allData.filter(data => slugify(data.category ? data.category : "") === "bangalore");
    console.log(delhiTeam)
    console.log(bangaloreTeam)
    console.log(dubaiTeam)
    console.log(hyderabadTeam)
    console.log(teamData)
    return (
        <div className="section section-padding pb--70 pb_lg--20 pb_md--0">
        <div className="container">
        <div className="section-heading heading-light">
            <h2 className="title mb--50 d-none">Our Bangalore Team</h2>
         
            </div>         
               <div className="row d-none">
                {bangaloreTeam.map((data) => (
                    <div className="col-xl-3 col-sm-6 team-list " key={data.id}>
                        <div className="team-grid">
                            <div className="thumbnail">
                                <Link to={process.env.PUBLIC_URL + `/team-details/${slugify(data.title)}`}>
                                    <img src={process.env.PUBLIC_URL + data.thumb.url} loading="lazy" alt={data.title} />
                                </Link>
                            </div>
                            <div className="content">
                                <h4 className="title">
                                    <Link to={process.env.PUBLIC_URL + `/team-details/${slugify(data.title)}`}>
                                        {data.title}
                                    </Link>
                                </h4>
                                <span className="designation" dangerouslySetInnerHTML={{__html: data.designation}}></span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="section-heading heading-light ">
            <h2 className="title mb--50">Our Dubai Team</h2>
           
            </div>
            <div className="row ">
                {dubaiTeam.map((data) => (
                    <div className="col-xl-3 col-sm-6 team-list" key={data.id}>
                        <div className="team-grid">
                            <div className="thumbnail">
                                <Link to={process.env.PUBLIC_URL + `/team-details/${slugify(data.title)}`}>
                                    <img src={process.env.PUBLIC_URL + data.thumb.url} loading="lazy" alt={data.title} />
                                </Link>
                            </div>
                            <div className="content">
                                <h4 className="title">
                                    <Link to={process.env.PUBLIC_URL + `/team-details/${slugify(data.title)}`}>
                                        {data.title}
                                    </Link>
                                </h4>
                                <span className="designation" dangerouslySetInnerHTML={{__html: data.designation}}></span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
           
        </div>
        <ul className="list-unstyled shape-group-10">
            <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/circle-1.png"} loading="lazy" alt="Circle" /></li>
            <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/line-3.png"} loading="lazy" alt="Circle" /></li>
            <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/bubble-5.png"} loading="lazy" alt="Circle" /></li>
        </ul>
    </div>

    )
}

export default TeamOverseas;