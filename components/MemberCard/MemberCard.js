function MemberCard({ member }) {
    return (
        <div className="m-3 h-24  w-24 cursor-pointer overflow-hidden rounded-full sm:m-2 sm:h-20 sm:w-20">
            <img src={member.image} className="h-full w-full object-cover" />
        </div>
    );
}

export default MemberCard;
