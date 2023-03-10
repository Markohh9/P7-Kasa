export async function fetchAppartements() {
    const response = await fetch(
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json"
    );
    const appartements = await response.json();
    return appartements;
}