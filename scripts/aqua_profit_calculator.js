/**
 * Aqua-Profit™ ROI Calculator Logic
 * Developed by Ledger (CFO) for Silsep
 * Integrated with Trial #22 and Trial #05 data.
 */

const AquaProfitCalculator = {
    // Standard Trial Constants
    constants: {
        FCR_IMPROVEMENT: 0.17, // Trial #22 reduction
        SURVIVAL_IMPROVEMENT: 0.10, // Targeted improvement (10%)
        ENZYME_RECOVERY_GAIN: 0.48, // 88% - 40%
        GROWTH_ACCELERATION: 0.137 // 13.7% ABW gain
    },

    /**
     * Calculate Net Profit Increase and ROI
     * @param {Object} inputs 
     * @returns {Object}
     */
    calculate: function(inputs) {
        const {
            pondSize,        // in Hectares
            stockingDensity, // Pcs per Hectare
            feedPrice,       // $/Tonne
            marketPrice,     // $/kg (Harvest)
            productCost      // $/Hectare (Silsep Investment)
        } = inputs;

        const totalPopulation = pondSize * stockingDensity;
        const avgHarvestWeightKg = 0.020; // 20g standard shrimp

        // 1. Revenue Gain from Survival (Trial #05 logic)
        // Extra kg = population * survival_gain * weight
        const extraBiomassKg = totalPopulation * this.constants.SURVIVAL_IMPROVEMENT * avgHarvestWeightKg;
        const revenueGain = extraBiomassKg * marketPrice;

        // 2. Feed Cost Savings (Trial #22 logic)
        // Total Biomass (Current) = population * current_survival * weight
        // For simplicity, we assume a baseline survival of 75% for control
        const baselineSurvival = 0.75;
        const baselineBiomassKg = totalPopulation * baselineSurvival * avgHarvestWeightKg;
        const baselineBiomassTons = baselineBiomassKg / 1000;
        
        // Feed saved = Total Biomass * FCR_reduction
        const feedSavedTons = baselineBiomassTons * this.constants.FCR_IMPROVEMENT;
        const feedCostSavings = feedSavedTons * feedPrice;

        // 3. Totals
        const totalProfitGain = revenueGain + feedCostSavings;
        const totalInvestment = pondSize * productCost;
        const netProfit = totalProfitGain - totalInvestment;
        const roiPercent = (netProfit / totalInvestment) * 100;

        return {
            revenueGain: revenueGain.toFixed(2),
            feedSavings: feedCostSavings.toFixed(2),
            totalGain: totalProfitGain.toFixed(2),
            netProfit: netProfit.toFixed(2),
            roi: roiPercent.toFixed(0)
        };
    }
};

// Exporting for Coder to integrate
if (typeof module !== 'undefined') {
    module.exports = AquaProfitCalculator;
}
