import React from "react";

interface ProfileCardProps {
  profile: {
    name: string;
    img: string;
    desc: string;
    handle: string;
  };
}



const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
  const { name, img, desc, handle } = profile;

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={img} alt="pda logo" />
        </figure>
      </div>

      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{name}</p>
          <p className="subtitle is-6">{handle}</p>
        </div>
        <div className="content">
        {desc}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
