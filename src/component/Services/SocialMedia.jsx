import React from "react";
import { NavLink } from 'react-router-dom';

const SocialMedia = () => {
    return (
        <>
            <div className="social_media">
                <div className="conatiner-fluid">
                    <div className="row">
                        <div className="col-md-12 social-media_ads">
                            <h1 className="social_media_title">
                                Social Media Advertising
                            </h1>
                            <p className="social_media_text">
                                FIND OUT HOW TO TAKE YOUR BUSINESS’S ONLINE PRESENCE TO THE NEXT LEVEL
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 social_info">
                            <h1 className="social_m">
                                SOCIAL MEDIA ADVERTISING 101: THE BASICS
                            </h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8">
                            <p className="info_media">
                                In today’s digital world, social media advertising is non negotiable.  Its importance cannot be downplayed and, as such, to be at the top of your game social media advertising must be mastered.
                            </p>
                            <p className="info_media">
                                Let’s be honest: it’s harder than ever to get your content noticed online.  Social media advertising is a prime way to start making progress in this area.  Consequences of missing out on social media marketing can be dire, and can seriously effect whether a brand, site,
                                company or individual succeeds or fails within the marketplace.  You’ve heard it said before – if you’re not on the internet, you don’t exist. This very mentality can and should be applied to brand strategy when setting up and preparing to execute any kind of campaign.
                                Put simply, social media advertising is a must.
                            </p>

                            <img src={require('../.././assest/service/social-media-bg.jpg')} className="img-fluid"></img>

                            <p className="info_media mt-4">
                                Social media advertising, sometimes called social media targeting, is a campaign put in place to target certain demographics on social media platforms.  The campaign consists of advertisements,
                                and in order to effectively carry out these campaigns, social networks can tap into user information to actually amplify advertisements that are proving relevant to their users.  The outcome is spectacular;
                                when an advertisement is playing into a specific target market and demographic on a social platform, that social advertisement skyrockets, benefitting both advertiser and social network.
                            </p>
                            <p className="s_media_l">
                                <NavLink to="#" className="experts"> Talk To Our Experts</NavLink>
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8 social_info">
                            <h1 className="social_m">
                                READY FOR SOCIAL MEDIA ADVERTISING ?
                            </h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8">
                            <p className="info_media">
                                In conclusion, it’s important you run social media marketing campaigns to grow your business and establish your brand’s presence online.  Be sure to learn more about social media marketing today!
                            </p>
                            <p className="info_media">
                                Call us at 1-844-MEDIA-55 / 1-844-633-4255 with any questions, concerns or projects you may need advice for!
                            </p>

                            <h4 className="best_media">
                                Best Social Media Marketing Agency In US
                            </h4>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default SocialMedia;