import candidates from "../json/candidates"

const CandidatesAPI = {
    candidates,
    all: function() { return this.candidates},
    get: function(id) {
        const isCandidat = p => p.number === id;
        return this.candidates.find(isCandidat)
    }
};

export default CandidatesAPI