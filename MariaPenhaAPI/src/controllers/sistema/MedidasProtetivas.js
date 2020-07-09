const MedidaProtetivaService = new(require('./../../service/MedidaProtetiva'));

module.exports = class MedidasProtetivasController {
    async index(req, res){
        let medidasProtetivas = await MedidaProtetivaService.index();
        res.json(medidasProtetivas);
    }

    async show(req, res){
        let medidaProtetiva = await MedidaProtetivaService.show(req.params.id)
        res.json(medidaProtetiva);
    }

    async create(req, res){
        let medidaProtetiva = await MedidaProtetivaService.create(req.body)
        res.json(medidaProtetiva);
    }

    async update(req, res){
        let retornoUpdate = await MedidaProtetivaService.update(req.params.id, req.body);
        res.json(retornoUpdate);
    }

    async delete(req, res){
        let retornoDelete = await MedidaProtetivaService.delete(req.params.id)
        res.json(retornoDelete);
    }    
}