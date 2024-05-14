
async function getInfo(): Promise<Characters[]> {
        const response = await fetch('URL_DE_TU_API');
        const data = await response.json();
        return data as Characters[];
    }
    
