function MemberCard({ member }) {
    return (
        <div className="m-2 h-32 w-32 overflow-hidden rounded-full sm:h-24 sm:w-24">
            <img src={member.image} className="h-full w-full object-cover" />
        </div>
    );
}

export default MemberCard;
