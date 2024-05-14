async function fetchCharactersFromAPI(): Promise<Characters[]> {
    const response = await fetch('URL_DE_TU_API');
    const data = await response.json();
    return data as Characters[];
}

function generateCharacterCard(character: Characters): string {
    return `
        <tr>
            <td>${character.name}</td>
            <td>${character.house}</td>
            <td>${character.gender}</td>
            <td>${character.species}</td>
            <td>${character.wizard ? 'Yes' : 'No'}</td>
            <td>${character.alive ? 'Yes' : 'No'}</td>
            <td><img src="${character.image || 'default_image.jpg'}" alt="${character.name}"></td>
        </tr>
    `;
}
