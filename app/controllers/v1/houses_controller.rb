class V1::HousesController < ApplicationController
    def index
        render json: { :houses => [
            {
                :name => 'Rupinder',
                :guid => 'ABCD'
            },
            {
                :name => 'Monga',
                :guid => 'XYZ'
            }
        ]}.to_json
    end
end