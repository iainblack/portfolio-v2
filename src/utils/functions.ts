
export function downloadResume() {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.setAttribute("download", "Iain Black Resume.pdf");
    link.setAttribute("target", "_blank");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}