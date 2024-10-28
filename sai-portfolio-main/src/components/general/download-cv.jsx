import Button from "./button";
const DownloadCV = () => {
    const handleDownloadClick = () => {
        fetch('Saimohan S_DA__.pdf').then(res => {
            res.blob().then(blob => {
                const url = window.URL.createObjectURL(blob)
                const link = document.createElement('a');
                link.href = url;
                link.download = 'Sai Mohan - CV.pdf'
                link.click();
            })
        })
    };
    return (
        <Button aria-label="Download CV" role="button" onClick={handleDownloadClick}>
            Download CV
        </Button>
    );
};

export default DownloadCV;
