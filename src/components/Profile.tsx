function Profile(props: any) {
    console.log(props);
    return (
        <>
            <div className="relative mt-8 flex items-center gap-x-4">
                <img src={props.avatarUrl} alt="" className="h-20 w-20 rounded-full bg-gray-50" />
                <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                        <a href="#">
                            <span className="absolute inset-0"></span>
                            Marcos Ricardo
                        </a>
                    </p>
                    <p className="text-gray-600">@mavericardo • Gympass • 2 seguidores • 2 seguindo</p>
                </div>
            </div>
            <div className="mx-auto max-w-2xl lg:mx-0">
                <p className="mt-2 text-lg leading-8 text-gray-600">Learning always</p>
            </div>
        </>
    );
}

export default Profile
