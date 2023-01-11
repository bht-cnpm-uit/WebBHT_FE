import { useEffect, useState } from 'react';
import Button from '../Button';

function PlatformGroup() {
    const [platforms, setPlatforms] = useState([]);
    useEffect(() => {
        fetchPlatforms();
    }, []);

    const fetchPlatforms = async () => {
        try {
            const res = await fetch('/api/getPlatform');
            const data = await res.json();
            if (data.error) {
                console.log(data);
                setPlatforms([]);
                return;
            }
            setPlatforms(data);
        } catch (error) {
            console.log(error);
            setPlatforms([]);
        }
    };

    return (
        <div className="flex space-x-2">
            {platforms.length === 0 ? (
                <>
                    <div className="h-9 w-9 animate-pulse rounded-full bg-slate-200"></div>
                    <div className="h-9 w-9 animate-pulse rounded-full bg-slate-200"></div>
                    <div className="h-9 w-9 animate-pulse rounded-full bg-slate-200"></div>
                </>
            ) : (
                platforms?.map((platform, index) => (
                    <Button key={index} square rounded aHref={platform.link} id={'platform-btn-' + index}>
                        <style>{`
                            #platform-btn-${index} {
                                background-color: ${platform.color};
                            }
                            #platform-btn-${index}:hover {
                                background-color: ${platform.colorDark};
                            }
                        `}</style>
                        <div
                            className="icon h-4 w-4 text-white"
                            dangerouslySetInnerHTML={{
                                __html: platform.icon,
                            }}
                        ></div>
                    </Button>
                ))
            )}
        </div>
    );
}

export default PlatformGroup;
