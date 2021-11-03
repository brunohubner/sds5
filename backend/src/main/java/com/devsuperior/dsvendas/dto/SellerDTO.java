package com.devsuperior.dsvendas.dto;

import java.io.Serializable;

import com.devsuperior.dsvendas.entities.Seller;

public class SellerDTO implements Serializable {
    private static final long serialVersionUID = 1l;
    
    private Long id;
    private String name;

    public SellerDTO() {
    }
    
    public SellerDTO(Long id, String name) {
        this.setId(id);
        this.setName(name);
    }

    public SellerDTO(Seller entity) {
        this.setId(entity.getId());
        this.setName(entity.getName());
    }
    
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
