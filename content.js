function DNAToRNA(codon)
{
    let convert = "";

    for (let i = 0; i < 3; i++)
    {
        if (codon[i] == 'a' || codon[i] == 'A')
        {
            convert += 'U';
        }
        else if (codon[i] == 't' || codon[i] == 'T')
        {
            convert += 'A';
        }
        else if (codon[i] == 'g' || codon[i] == 'G')
        {
            convert += 'C';
        }
        else
        {
            convert += 'G';
        }
    }

    return convert;
}

function RNAToDNA(codon)
{
    let convert = "";

    for (let i = 0; i < 3; i++)
    {
        if (codon[i] == 'a' || codon[i] == 'A')
        {
            convert += 'T';
        }
        else if (codon[i] == 'u' || codon[i] == 'U')
        {
            convert += 'A';
        }
        else if (codon[i] == 'g' || codon[i] == 'G')
        {
            convert += 'C';
        }
        else
        {
            convert += 'G';
        }
    }

    return convert;
}

function RNAToAnticodon(codon)
{
    let convert = "";

    for (let i = 0; i < 3; i++)
    {
        if (codon[i] == 'a' || codon[i] == 'A')
        {
            convert += 'U';
        }
        else if (codon[i] == 'u' || codon[i] == 'U')
        {
            convert += 'A';
        }
        else if (codon[i] == 'g' || codon[i] == 'G')
        {
            convert += 'C';
        }
        else
        {
            convert += 'G';
        }
    }

    return convert;
}

function RNAToProtein(codon)
{
    let protein = "";
    let codonUpper = codon.toUpperCase();

    if (codonUpper[0] == 'A')
    {
        if (codonUpper[1] == 'A')
        {
            if (codonUpper[2] == 'A' || codonUpper[2] == "G")
            {
                protein = "Lys";
            }
            else
            {
                protein = "Asn";
            }
        }
        else if (codonUpper[1] == 'U')
        {
            if (codonUpper[2] == 'G')
            {
                protein = "Met (Start)";
            }
            else
            {
                protein = "Ile";
            }
        }
        else if (codonUpper[1] == 'G')
        {
            if (codonUpper[2] == 'A' || codonUpper[2] == "G")
            {
                protein = "Arg";
            }
            else
            {
                protein = "Ser";
            }
        }
        else
        {
            protein = "Thr";
        }
    }
    else if (codonUpper[0] == 'U')
    {
        if (codonUpper[1] == 'A')
        {
            if (codonUpper[2] == 'A' || codonUpper[2] == "G")
            {
                protein = "Stop";
            }
            else
            {
                protein = "Tyr";
            }
        }
        else if (codonUpper[1] == 'U')
        {
            if (codonUpper[2] == 'A' || codonUpper[2] == "G")
            {
                protein = "Leu";
            }
            else
            {
                protein = "Phe";
            }
        }
        else if (codonUpper[1] == 'G')
        {
            if (codonUpper[2] == 'A')
            {
                protein = "Stop";
            }
            else if (codonUpper[2] == 'G')
            {
                protein = "Trp";
            }
            else
            {
                protein = "Cys";
            }
        }
        else
        {
            protein = "Ser";
        }
    }
    else if (codonUpper[0] == 'G')
    {
        if (codonUpper[1] == 'A')
        {
            if (codonUpper[2] == 'A' || codonUpper[2] == "G")
            {
                protein = "Glu";
            }
            else
            {
                protein = "Asp";
            }
        }
        else if (codonUpper[1] == 'U')
        {
            protein = "Val";
        }
        else if (codonUpper[1] == 'G')
        {
            protein = "Gly";
        }
        else
        {
            protein = "Ala";
        }
    }
    else
    {
        if (codonUpper[0] == 'A')
        {
            if (codonUpper[2] == 'A' || codonUpper[2] == "G")
            {
                protein = "Gln";
            }
            else
            {
                protein = "His";
            }
        }
        else if (codonUpper[0] == 'U')
        {
            protein = "Leu";
        }
        else if (codonUpper[0] == 'G')
        {
            protein = "Arg";
        }
        else
        {
            protein = "Pro";
        }
    }

    return protein;
}

document.addEventListener("DOMContentLoaded", () => 
{

    const convert = document.getElementById("convert");

    convert.addEventListener("click", () => 
    {

        let dnaCheck = document.getElementById("DNA");
        let codon = document.getElementById("codon").value;

        let error = document.getElementById("error");
        let dna = document.getElementById("DNAResult");
        let rna = document.getElementById("RNAResult");
        let anticodonElement = document.getElementById("anticodon");
        let protein = document.getElementById("protein");

        if (codon.length < 3 || codon.length > 3) 
        {
            error.innerHTML = "Error: must have 3 nucleotides";
            dna.innerHTML = "";
            rna.innerHTML = "";
            anticodonElement.innerHTML = "";
            protein.innerHTML = "";
        }
        else 
        {
            if (dnaCheck.checked) 
            {
                for (let i = 0; i < 3; i++)
                {
                    if (codon[i].toUpperCase() != 'A' && codon[i].toUpperCase() != 'T' && codon[i].toUpperCase() != 'G' && codon[i].toUpperCase() != 'C')
                    {
                        error.innerHTML = "Error: invalid codon";
                        dna.innerHTML = "";
                        rna.innerHTML = "";
                        anticodonElement.innerHTML = "";
                        protein.innerHTML = "";
                        return;
                    }
                }
                error.innerHTML = "";
                dna.innerHTML = "DNA: " + codon;
                rna.innerHTML = "RNA: " + DNAToRNA(codon);
                anticodonElement.innerHTML = "";
                protein.innerHTML = "Protein: " + RNAToProtein(DNAToRNA(codon));
            }
            else 
            {
                for (let i = 0; i < 3; i++)
                {
                    if (codon[i].toUpperCase() != 'A' && codon[i].toUpperCase() != 'U' && codon[i].toUpperCase() != 'G' && codon[i].toUpperCase() != 'C')
                    {
                        error.innerHTML = "Error: invalid codon";
                        dna.innerHTML = "";
                        rna.innerHTML = "";
                        anticodonElement.innerHTML = "";
                        protein.innerHTML = "";
                        return;
                    }
                }
                error.innerHTML = "";
                dna.innerHTML = "DNA: " + RNAToDNA(codon);
                rna.innerHTML = "RNA: " + codon;
                anticodonElement.innerHTML = "Anticodon: " + RNAToAnticodon(codon);
                protein.innerHTML = "Protein: " + RNAToProtein(codon);
            }
        }
    });

    
});