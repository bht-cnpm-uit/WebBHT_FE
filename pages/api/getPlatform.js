import shadeColor from '~/utils/shadeColor';

export default function handler(req, res) {
    const fetchPlatforms = async () => {
        try {
            const _res = await fetch(`${process.env.NOTION_API}/databases/${process.env.PLATFORM_GROUP_DB_ID}/query`, {
                method: 'POST',
                headers: {
                    Authorization: 'Bearer ' + process.env.NOTION_TOKEN,
                    'Content-Type': 'application/json',
                    'Notion-Version': process.env.NOTION_VERSION,
                },
                body: JSON.stringify({
                    sorts: [
                        {
                            property: 'index',
                            direction: 'ascending',
                        },
                    ],
                }),
            });
            const data = await _res.json();
            const _platforms = data?.results?.map((page) => ({
                name: page?.properties?.name?.title?.[0]?.plain_text || null,
                icon: page?.properties?.icon?.url || '',
                link: page?.properties?.link?.url || '',
                color: page?.properties?.color?.url || '',
                colorDark: shadeColor(page?.properties?.color?.url, -10),
            }));
            res.status(200).json(_platforms);
        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: {
                    message: 'Internal server error',
                },
            });
        }
    };
    fetchPlatforms();
}
